import { ProvidersImages } from '@/assets/Providers Icons'
import { signInWithOAuth } from '@/utils'
import { type Provider } from '@supabase/supabase-js'

interface OAuthButtonProps {
  provider: Provider
}

export const OAuthButton: React.FC<OAuthButtonProps> = ({ provider }) => {
  return (
    <button
      onClick={() => {
        void signInWithOAuth({ provider })
      }}
      className='mx-auto mb-1 mt-4 flex items-center justify-center'
    >
      <img
        src={ProvidersImages[provider]}
        className='h-12 w-full'
        alt={provider}
        draggable={false}
      />
    </button>
  )
}
