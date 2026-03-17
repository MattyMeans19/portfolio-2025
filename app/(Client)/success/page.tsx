import { cookies } from 'next/headers';
import { db } from '@/db'; // your db path
import { Quotes } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function Success() {
    const cookieStore = await cookies();
    const quoteId = cookieStore.get('last_quote_id')?.value;

    if (!quoteId) {
        return <div>No recent quote found.</div>;
    }

    // Fetch the specific data using the ID from the cookie
    const quoteData = await db.query.Quotes.findFirst({
        where: eq(Quotes.id, parseInt(quoteId))
    });

    if (!quoteData) return <div className='grow content-center hero-bg text-center text-7xl'>Quote not found.</div>;

    return (
        <main className="grow p-8 hero-bg content-center">
            <div className='place-self-center bg-slate-100 p-30 border rounded-2xl shadow-2xl shadow-slate-800 
                flex flex-col gap-10'>
                <h1 className='text-3xl text-(--primary) mb-6 text-shadow-md text-shadow-black'>Success!</h1>
                <p className="text-4xl">Thank you, <strong className='text-(--primary) mb-6 text-shadow-md text-shadow-black'>{quoteData.customer}</strong>.</p>
                <p className="text-4xl">Your request will be reviewed and I will get back to you within 48 hours for more details.</p>
                <p className="text-4xl">
                    Keep an eye out for an email at <strong className='text-(--primary) mb-6 text-shadow-md text-shadow-black'>{quoteData.customerEmail}</strong>, 
                    as it will be the primary source of contact for the initial quoting proccess.
                </p>                
            </div>

        </main>
    );
}