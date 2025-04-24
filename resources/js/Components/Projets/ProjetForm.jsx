import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";

export function ProjetForm({itemToUpdate,closeParentModal}) {
    const { data, setData, post,patch, processing, errors, reset } = useForm(itemToUpdate);
    const submit = (e) => {
        e.preventDefault();
            if(itemToUpdate.id){
                patch(route('projets.update',itemToUpdate.id), {
                    onFinish: () => reset(['nom_projet','budget','date_du_debut','annne']),
                    onSuccess: ()=> closeParentModal(),
                }); 
                return;
            }
            post(route('projets.store'), {
                onFinish: () => reset(['nom_projet','budget','date_du_debut','annne']),
                onSuccess: ()=>{
                    closeParentModal()
                },
            });   
    };   
    return <div className="p-4">
            <form onSubmit={submit}>
                <div className="mt-2">
                    <InputLabel htmlFor="nom_projet" value="Nom du projet" />

                    <TextInput
                        id="nom_projet"
                        type="text"
                        name="nom_projet"
                        value={data.nom_projet}
                        className="mt-1 block w-full"
                        autoComplete="Nom du projet"
                        isFocused={true}
                        onChange={(e) => setData('nom_projet', e.target.value)}
                    />

                    <InputError message={errors.nom_projet} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="budget" value="Budget du projet" />

                    <TextInput
                        id="budget"
                        type="text"
                        name="budget"
                        value={data.budget}
                        className="mt-1 block w-full"
                        autoComplete="Budget du projet"
                        onChange={(e) => setData('budget', e.target.value)}
                    />

                    <InputError message={errors.budget} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="date_du_debut" value="Ce projet débute le" />

                    <TextInput
                        id="date_du_debut"
                        type="date"
                        name="date_du_debut"
                        value={data.date_du_debut}
                        className="mt-1 block w-full"
                        autoComplete="Nom du projet"
                        onChange={(e) => setData('date_du_debut', e.target.value)}
                    />

                    <InputError message={errors.date_du_debut} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="annee" value="Année" />

                    <TextInput
                        id="annee"
                        type="text"
                        name="annee"
                        value={data.annee}
                        className="mt-1 block w-full"
                        autoComplete=""
                        onChange={(e) => setData('annee', e.target.value)}
                    />

                    <InputError message={errors.annee} className="mt-2" />
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
