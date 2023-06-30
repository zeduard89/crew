import { supabase } from '.'

export const etUserId = async (): Promise<string | undefined> => {
  const userId = (await supabase.auth.getUser()).data.user?.id
  return userId
}
