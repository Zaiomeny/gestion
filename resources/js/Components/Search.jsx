import { useForm } from "@inertiajs/react";
import InputSearch from "./InputSearch";
import InputError from "./InputError";

export default function Search() {
    const { data,setData, errors, get } = useForm({
        'keyword': ''
    })
    const handleSearch = (e)=>{
        e.preventDefault()
        if(data.keyword){
            get(route('search',{'keyword':data.keyword}))
        }
    }
    return <div className="px-1 py-3">
        <form onSubmit={handleSearch}>
            <InputSearch value={data.keyword} onChange={(e)=>setData('keyword',e.target.value)} className='h-[34px] w-full bg-gray-200/70 dark:bg-gray-900 dark:border-gray-700'/>
             <InputError message={errors.keyword} className="mt-2" />
        </form>
    </div>
};