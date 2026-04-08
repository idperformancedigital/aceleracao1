
CREATE OR REPLACE FUNCTION public.set_lead_origem()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.origem IS NULL OR NEW.origem = '' THEN
    NEW.origem := coalesce(
      nullif(current_setting('request.headers', true)::json->>'referer', ''),
      nullif(current_setting('request.headers', true)::json->>'origin', ''),
      'desconhecido'
    );
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_set_lead_origem
BEFORE INSERT ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.set_lead_origem();
