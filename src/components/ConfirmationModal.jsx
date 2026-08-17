export default function ConfirmationModal({
  isOpen,
  selections,
  totalNutritionSnapshot,
  language,
  isLoading,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  const isArabic = language === "ar-EG";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-lg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="meal-confirmation-title"
    >
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-surface p-xl shadow-xl">
        <h2 id="meal-confirmation-title" className="headline-sm text-text-primary">
          Confirm selected meals
        </h2>
        <p className="mt-xs text-sm text-text-secondary">
          Review your selected meals before confirming.
        </p>

        <div className="mt-lg space-y-md">
          {selections.map((selection) => (
            <div
              key={selection.recipeId}
              className="rounded-xl border border-border/70 bg-primary/5 p-md"
            >
              <div className="flex items-start justify-between gap-md">
                <div>
                  <p className="text-sm text-text-secondary">{selection.mealCategory}</p>
                  <h3 className="font-semibold text-text-primary">
                    {isArabic ? selection.nameAr : selection.nameEn}
                  </h3>
                </div>
                <span className="text-sm text-text-secondary">
                  {selection.portionGrams} g
                </span>
              </div>

              <div className="mt-md grid grid-cols-2 gap-xs text-sm text-text-secondary sm:grid-cols-5">
                <span>{selection.nutritionSnapshot.calories} kcal</span>
                <span>{selection.nutritionSnapshot.protein_g} g protein</span>
                <span>{selection.nutritionSnapshot.fat_g} g fat</span>
                <span>{selection.nutritionSnapshot.carbs_g} g carbs</span>
                <span>{selection.nutritionSnapshot.sodium_mg} mg sodium</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-lg rounded-xl border border-success/20 bg-success/5 p-md">
          <h3 className="font-semibold text-text-primary">Total nutrition</h3>
          <div className="mt-xs grid grid-cols-2 gap-xs text-sm text-text-secondary sm:grid-cols-5">
            <span>{totalNutritionSnapshot.calories} kcal</span>
            <span>{totalNutritionSnapshot.protein_g} g protein</span>
            <span>{totalNutritionSnapshot.fat_g} g fat</span>
            <span>{totalNutritionSnapshot.carbs_g} g carbs</span>
            <span>{totalNutritionSnapshot.sodium_mg} mg sodium</span>
          </div>
        </div>

        <div className="mt-xl flex justify-end gap-md">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="h-11 px-lg rounded-xl border border-border text-text-secondary hover:text-primary hover:border-primary/50 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="h-11 px-lg rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
