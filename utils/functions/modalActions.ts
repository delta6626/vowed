export const openModal = (modalId: string) => {
  const modal = document.getElementById(modalId) as HTMLDialogElement;
  if (!modal) console.error(`Could not find modal with ID: ${modalId}`);
  modal.showModal();
};

export const closeModal = (modalId: string) => {
  const modal = document.getElementById(modalId) as HTMLDialogElement;
  if (!modal) console.error(`Could not find modal with ID: ${modalId}`);
  modal.close();
};
