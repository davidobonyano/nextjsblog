export default async function Articledetails({params, searchParams}:{params:Promise<{articleid:string}>;
                                                                    searchParams:Promise<{lang: "en" | "es" | "fr"}>}) 
{  const {articleid} = await params;
   const {lang} = await searchParams 
    return(
        <div>
            <h1>News Article id {articleid}</h1>
            <p>you are reading this {lang} </p>

            
        </div>
    )
}