"use client";

import { useRestaurant } from "@/context/RestaurantContext";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import PrimaryButton from "@/components/ui/primaryButton";
import FoodModal from "./FoodModal";

export default function MenuTable() {
  const { menuItems, addFood, updateFood, deleteFood, isHydrated } =
    useRestaurant();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFood, setActiveFood] = useState(null);

  const openAddModal = () => {
    setActiveFood(null);
    setIsModalOpen(true);
  };

  const openEditModal = (food) => {
    setActiveFood(food);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveFood(null);
    setIsModalOpen(false);
  };

  const handleSave = async (values) => {
    if (activeFood) {
      updateFood(activeFood.id, values);
    } else {
      addFood(values);
    }
    closeModal();
  };

  return (
    <>
      <section className="space-y-6">
        <header className="surface-card rounded-[32px] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Food Menu Management</p>
              <h1 className="section-title text-3xl sm:text-4xl">
                Add, edit, and curate the public menu
              </h1>
              <p className="section-lead max-w-3xl">
                All CRUD actions update the shared context and the
                `restaurant-menu` local storage key, keeping the public website
                in sync without a backend.
              </p>
            </div>
            <PrimaryButton type="button" onClick={openAddModal}>
              <Plus size={16} />
              <span className="ml-2">Add Food</span>
            </PrimaryButton>
          </div>
        </header>

        <div className="surface-card overflow-hidden rounded-[32px]">
          {!isHydrated ? (
            <div className="p-8 text-sm text-[rgba(44,44,44,0.72)]">Loading menu items...</div>
          ) : (
            <>
              <div className="hidden overflow-x-auto lg:block">
                <table className="min-w-full">
                  <thead className="bg-[rgba(31,75,67,0.06)]">
                    <tr className="text-left text-xs uppercase tracking-[0.22em] text-[rgba(44,44,44,0.56)]">
                      <th className="px-6 py-4">Name</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems.map((food) => (
                      <tr
                        key={food.id}
                        className="border-t border-[rgba(31,75,67,0.08)] text-sm text-[rgba(44,44,44,0.8)]"
                      >
                        <td className="px-6 py-5">
                          <p className="font-semibold text-[var(--color-primary-dark)]">
                            {food.name}
                          </p>
                          <p className="mt-1 max-w-md text-xs leading-6 text-[rgba(44,44,44,0.6)]">
                            {food.description}
                          </p>
                        </td>
                        <td className="px-6 py-5">{food.category}</td>
                        <td className="px-6 py-5">{food.price}</td>
                        <td className="px-6 py-5">
                          <div className="flex flex-wrap gap-2">
                            {food.featured ? (
                              <span className="rounded-full bg-[rgba(201,168,106,0.2)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">
                                Featured
                              </span>
                            ) : null}
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
                                food.available
                                  ? "bg-[rgba(31,75,67,0.12)] text-[var(--color-primary-dark)]"
                                  : "bg-[rgba(44,44,44,0.08)] text-[rgba(44,44,44,0.54)]"
                              }`}
                            >
                              {food.available ? "Available" : "Unavailable"}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => openEditModal(food)}
                              className="inline-flex items-center gap-2 rounded-full border border-[rgba(31,75,67,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] transition hover:bg-white"
                            >
                              <Pencil size={14} />
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => deleteFood(food.id)}
                              className="inline-flex items-center gap-2 rounded-full border border-[rgba(179,75,63,0.2)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#b34b3f] transition hover:bg-[#fff2ef]"
                            >
                              <Trash2 size={14} />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-4 p-4 lg:hidden">
                {menuItems.map((food) => (
                  <article
                    key={food.id}
                    className="rounded-[24px] border border-[rgba(31,75,67,0.08)] bg-white/75 p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-[var(--font-playfair)] text-2xl text-[var(--color-primary-dark)]">
                          {food.name}
                        </p>
                        <p className="mt-1 text-sm text-[rgba(44,44,44,0.58)]">
                          {food.category} | {food.price}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[rgba(44,44,44,0.76)]">
                      {food.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {food.featured ? (
                        <span className="rounded-full bg-[rgba(201,168,106,0.2)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">
                          Featured
                        </span>
                      ) : null}
                      <span className="rounded-full bg-[rgba(31,75,67,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]">
                        {food.available ? "Available" : "Unavailable"}
                      </span>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => openEditModal(food)}
                        className="inline-flex items-center gap-2 rounded-full border border-[rgba(31,75,67,0.12)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]"
                      >
                        <Pencil size={14} />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteFood(food.id)}
                        className="inline-flex items-center gap-2 rounded-full border border-[rgba(179,75,63,0.2)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#b34b3f]"
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <FoodModal
        isOpen={isModalOpen}
        food={activeFood}
        onClose={closeModal}
        onSubmit={handleSave}
      />
    </>
  );
}
