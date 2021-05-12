import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/client'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import { useRouter } from 'next/router'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps ) {
    const[session] = useSession();
    const router = useRouter()

    async function handleSubscribe() {
        if(!session) {
            signIn('github')
            return;
        }

        if(session?.activeSubscription) {
            router.push('/posts');
            
            return;
        }


        // criação da chechout session
        try {
            const response = await api.post('/subscribe')

            const { sessionId } = response.data;

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout( {sessionId : sessionId} )
        } catch (err) {
            alert(err.message);
        }

    }
    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe Now
        </button>
        

    )


}