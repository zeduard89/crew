import { type Provider } from '@supabase/supabase-js'
import { supabase } from '.'

export interface signInWithOAuthProps {
  provider: Provider
}

export const signInWithOAuth = async ({
  provider,
}: signInWithOAuthProps): Promise<void> => {
  await supabase.auth.signInWithOAuth({
    provider,
  })
}
