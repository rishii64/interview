import React, {Suspense, lazy} from "react";

const Home = lazy(()=> import('./HomeLazy')) 

export default function Lazy({value}){
    return(
        <>
            <h2>Lazy Component</h2>
            <Suspense fallback={<p>Lazy Loading....</p>}>
                <Home data={value} />
            </Suspense>
        </>
    )
}