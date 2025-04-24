import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";

export function ActeurForm({itemToUpdate,closeParentModal}) {
     const { data, setData, post,patch, processing, errors, reset } = useForm(itemToUpdate);
        const submit = (e) => {
            e.preventDefault();
                if(itemToUpdate.id){
                    patch(route('acteurs.update',{'acteur_id':itemToUpdate.id}), {
                        onFinish: () => reset(['nom_acteur','prenom','adresse','telephone','CIN','projet_id']),
                        onSuccess: ()=> closeParentModal(),
                    }); 
                    return;
                }
                
                post(route('acteurs.store',{'projet_id':itemToUpdate.projet_id}), {
                    onFinish: () => reset(['nom_acteur','prenom','adresse','telephone','CIN','projet_id']),
                    onSuccess: ()=>{
                        closeParentModal()
                    },
                });   
            };
    return <div className="p-4">
         <form onSubmit={submit}>
                <div className="mt-2">
                    <InputLabel htmlFor="nom_acteur" value="Nom" />

                    <TextInput
                        id="nom_acteur"
                        type="text"
                        name="nom_acteur"
                        value={data.nom_acteur}
                        className="mt-1 block w-full"
                        autoComplete=""
                        isFocused={true}
                        onChange={(e) => setData('nom_acteur', e.target.value)}
                    />

                    <InputError message={errors.nom_acteur} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="prenom" value="Prénom" />

                    <TextInput
                        id="prenom"
                        type="text"
                        name="prenom"
                        value={data.prenom}
                        className="mt-1 block w-full"
                        autoComplete=""
                        onChange={(e) => setData('prenom', e.target.value)}
                    />

                    <InputError message={errors.prenom} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="adresse" value="Adresse" />

                    <TextInput
                        id="adresse"
                        type="text"
                        name="adresse"
                        value={data.adresse}
                        className="mt-1 block w-full"
                        autoComplete=""
                        onChange={(e) => setData('adresse', e.target.value)}
                    />

                    <InputError message={errors.adresse} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="telephone" value="Contact téléphonique" />

                    <TextInput
                        id="telephone"
                        type="text"
                        name="telephone"
                        value={data.telephone}
                        className="mt-1 block w-full"
                        autoComplete=""
                        onChange={(e) => setData('telephone', e.target.value)}
                    />

                    <InputError message={errors.telephone} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="CIN" value="N° CIN" />

                    <TextInput
                        id="CIN"
                        type="text"
                        name="CIN"
                        value={data.CIN}
                        className="mt-1 block w-full"
                        autoComplete=""
                        onChange={(e) => setData('CIN', e.target.value)}
                    />

                    <InputError message={errors.CIN} className="mt-2" />
                </div>
                <div className="mt-2 text-right">
                    <PrimaryButton className="w-full justify-center" disabled={processing}>
                        {(itemToUpdate.id)? 'Modifier' : 'Créer '}
                        {processing && <LoaderCircle/>}
                    </PrimaryButton>
                </div>
            </form>
    </div>
};