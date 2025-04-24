import { ActeurItem } from "@/Components/Acteurs/ActeurItem";
import { ProjetItem } from "@/Components/Projets/ProjetItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function SearchIndex({ ...parts }) {
    return <AuthenticatedLayout>
        <Head title="Search" />
        <div className="w-full">
            <div className="py-2 rounded-sm">
                <h1 className="text-indigo-gardiant font-semibold text-2xl">Résultats du recherche</h1>
            </div>
            <div className="dark:bg-gray-900 bg-gray-200/60 p-2 rounded-sm">
                {parts.projets &&
                    (
                        <div>
                            <h1 className="my-3">Projets</h1>
                            <table className="border-gray-400 w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left">Nom du projet</th>
                                        <th className="text-left">Budget brut</th>
                                        <th className="text-left">Annee</th>
                                        <th className="text-left">Début</th>
                                        <th className="text-left" colSpan={3}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {parts.projets.map(projet => (
                                        <ProjetItem projet={projet} setToUpdate={() => { }} key={projet.id} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
            <div className="dark:bg-gray-900 bg-gray-200/60 p-2 rounded-sm mt-5">
                {parts.acteurs &&
                    (
                        <div>
                            <h1 className="my-3">Acteurs</h1>
                            <table className="border-gray-400 w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left">Nom</th>
                                        <th className="text-left">Prénom</th>
                                        <th className="text-left">Adresse</th>
                                        <th className="text-left">Téléphone</th>
                                        <th className="text-left">CIN</th>
                                        <th className="text-left" colSpan={3}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ActeurItem acteurs={parts.acteurs} setToUpdate={() => { }} />

                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        </div>
    </AuthenticatedLayout>
};