import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/router';

const supabaseUrl = 'https://ovnsgrllmcmvhjqxkdga.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bnNncmxsbWNtdmhqcXhrZGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk2MzcsImV4cCI6MjAxNDg1NTYzN30.BzufAu0K8RNkj2NB0wkAfMHV1Cza2tE40nsyhsfEWtU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function New() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const onLogin = () => {
        router.push('/new/article')
    }

    useEffect(() => {
        (async () => {
            const session = await supabase.auth.getSession();
            if (session.data.session) {
                onLogin();
            }
        })()
    }, [])


    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            console.error('Error logging in:', error);
            alert('Login failed');
        } else {
            onLogin();
        }
    };

    return <div className="container py-12">
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>

    </div>
}