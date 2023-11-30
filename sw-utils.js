
function actualizaCacheDinamico(dynamicCache,req,res){
    //Si encontro el recurso
    if(res.ok){
        //Si encontro abre el cache dynamicCache
        return caches.open(dynamicCache).then(cache=>{
            //Manda a la cache lo solicitado y lo respondido
            cache.put(req,res.clone());
            //Y retorna la respuesta y la clona
            return res.clone();
        })
    }else{
        //Si no lo encontro retorna la resuesta...
        return res;
    }
}