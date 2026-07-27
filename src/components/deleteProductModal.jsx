import { CiTrash } from "react-icons/ci";
import { useState } from "react";
import api from "../lib/api";
import toast from "react-hot-toast";

export function DeleteProductModal(props) {
    const [showModal, setShowModal] = useState(false);
    const refresh = props.refresh;
    const product = props.product;

    async function handleDelete() {
        const token = localStorage.getItem("token");

        try {
            await api.delete(`/products/${product.productId}`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            toast.success("Product Deleted Successfully");
            refresh();
        } catch (err) {
            console.log(err);
            toast.error("Failed to Delete Product");
        } finally {
            setShowModal(false);
        }
    }

    return (
        <>
            <CiTrash
                onClick={() => setShowModal(true)}
                className="hover:text-red-600 cursor-pointer"
            />
            {showModal && (
                <div className="w-screen h-screen bg-black/50 flex items-center justify-center fixed left-0 top-0">
                    <div className="w-[400px] h-[200px] bg-white rounded-2xl flex flex-col items-center justify-between gap-4">
                        <div className="w-full h-[40px] bg-accent rounded-t-2xl flex items-center justify-between p-4 text-white">
                            <h1 className="px-2">Delete Confirmation</h1>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-xl font-bold hover:text-red-600 cursor-pointer"
                            >
                                X
                            </button>
                        </div>
                        <p className="text-lg">
                            Are you sure you want to delete{" "}
                            <span className="font-bold">{product.name}</span>?
                        </p>
                        <div className="flex gap-4 mb-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="p-2 bg-red-600 text-white rounded-md hover:bg-red-800"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="p-2 bg-green-600 text-white rounded-md hover:bg-green-800"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}