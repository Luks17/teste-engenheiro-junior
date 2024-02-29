import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Show({ auth, product }) {
    function handleDelete(e) {
        e.preventDefault();
        router.delete(route("dashboard.products.destroy", product.id));
    }

    return (
        <AuthenticatedLayout user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Produto - {product.name}</h2>
                </div>
            }
        >
            <Head title="Produtos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 w-1/2 mx-auto overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex justify-between border-b-2 border-slate-950">
                            <h6 className="p-5 text-gray-200">Itens</h6>
                            <div className="flex px-2 gap-x-4">
                                <NavLink href={route("dashboard.products.edit", product.id)}>Editar</NavLink>
                                <button className="text-red-600 opacity-90 hover:opacity-100 underline-offset-4 underline" onClick={handleDelete}>Deletar</button>
                            </div>
                        </div>
                        <ul className="flex flex-col">
                            <ProductItem label={"Nome"} item={product.name} />
                            <ProductItem label={"Preço"} item={"R$" + (product.price / 100.0).toFixed(2)} />
                            <ProductItem  label={"Estoque"} item={product.stock} />
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

function ProductItem({ label, item }) {
    return (
        <li className="grid grid-cols-3 text-gray-200 border-b border-slate-900">
            <div className="bg-red-900 py-5 px-2 col-span-1 border-r border-slate-900">{label}</div>
            <div className="col-span-2 bg-slate-600 py-5 px-2 text-center">{item}</div>
        </li>
    )
}