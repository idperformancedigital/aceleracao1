import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";

interface Lead {
  id: string;
  nome: string;
  whatsapp: string;
  site: string | null;
  instagram: string | null;
  origem: string | null;
  created_at: string;
}

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchLeads();
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchLeads();
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Erro ao carregar leads", description: error.message, variant: "destructive" });
      return;
    }
    setLeads((data as Lead[]) || []);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({ title: "Erro no login", description: error.message, variant: "destructive" });
    }
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setLeads([]);
  };

  const exportCSV = () => {
    if (!leads.length) return;
    const headers = ["Nome", "WhatsApp", "Site", "Instagram", "Origem", "Data"];
    const rows = leads.map((l) => [
      l.nome,
      l.whatsapp,
      l.site || "",
      l.instagram || "",
      l.origem || "",
      new Date(l.created_at).toLocaleString("pt-BR"),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark">
        <p className="text-on-dark">Carregando...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-dark px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col gap-4 bg-surface-dark-card p-8 rounded-2xl">
          <h1 className="text-2xl font-bold text-on-dark text-center">Painel Admin</h1>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-surface-dark-secondary text-on-dark border-green-accent/20"
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-surface-dark-secondary text-on-dark border-green-accent/20"
          />
          <Button type="submit" disabled={authLoading} className="bg-cta-green text-primary-foreground font-bold">
            {authLoading ? "Entrando..." : "Entrar"}
          </Button>
          <button type="button" onClick={() => navigate("/")} className="text-on-dark-muted text-sm underline">
            Voltar ao site
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-dark p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-on-dark">Leads ({leads.length})</h1>
          <div className="flex gap-2">
            <Button onClick={exportCSV} variant="outline" className="border-green-accent/30 text-on-dark hover:bg-surface-dark-card">
              Exportar CSV
            </Button>
            <Button onClick={handleLogout} variant="ghost" className="text-on-dark-muted">
              Sair
            </Button>
          </div>
        </div>

        {leads.length === 0 ? (
          <p className="text-on-dark-muted text-center py-12">Nenhum lead cadastrado ainda.</p>
        ) : (
          <div className="rounded-xl border border-green-accent/10 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-green-accent/10 hover:bg-transparent">
                   <TableHead className="text-on-dark-muted">Nome</TableHead>
                   <TableHead className="text-on-dark-muted">WhatsApp</TableHead>
                   <TableHead className="text-on-dark-muted">Site</TableHead>
                   <TableHead className="text-on-dark-muted">Instagram</TableHead>
                   <TableHead className="text-on-dark-muted min-w-[360px]">Origem</TableHead>
                   <TableHead className="text-on-dark-muted">Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id} className="border-green-accent/10 hover:bg-surface-dark-card">
                    <TableCell className="text-on-dark font-medium">{lead.nome}</TableCell>
                    <TableCell className="text-on-dark">{lead.whatsapp}</TableCell>
                     <TableCell className="text-on-dark-muted">{lead.site || "—"}</TableCell>
                     <TableCell className="text-on-dark-muted">{lead.instagram || "—"}</TableCell>
                     <TableCell
                       className="text-on-dark-muted text-xs min-w-[360px] whitespace-normal break-all"
                       title={lead.origem || "—"}
                     >
                       {lead.origem || "—"}
                     </TableCell>
                     <TableCell className="text-on-dark-muted">
                      {new Date(lead.created_at).toLocaleString("pt-BR")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
