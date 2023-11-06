export const apiAuthCheck = async (supabase, req) => {
    const refreshToken = req.cookies['my-refresh-token']
    const accessToken = req.cookies['my-access-token']

    if (refreshToken && accessToken) {
        const { data, error } = await supabase.auth.setSession({
            refresh_token: refreshToken,
            access_token: accessToken
        })
        if(error || !data.user){
            throw new Error('Unauthenticated 1')
        }else{ 
            return data.user
        }
    }else{
        throw new Error('Unauthenticated 2')
    }
} 