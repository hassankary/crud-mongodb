export const AddProductForm = ({
  valueTitle,
  onChangeTitle,
  valueSubtitle,
  onChangeSubtitle,
  onClick,
}) => {
  return (
    <>
      <div className="flex flex-col mx-auto p-10 w-fit items-center justify-center font-bold bg-slate-800 border rounded-3xl">
        <div className="pb-8 text-xl text-white">Add New Product</div>
        <form className="flex flex-col space-y-2 text-black">
          <input
            value={valueTitle}
            onChange={onChangeTitle}
            type="text"
            placeholder="Title..."
            className="input input-bordered input-accent bg-slate-50 w-full max-w-xs"
          />
          <input
            value={valueSubtitle}
            onChange={onChangeSubtitle}
            type="text"
            placeholder="Subtitle..."
            className="input input-bordered input-accent bg-slate-50 w-full max-w-xs"
          />
          <button
            onClick={onClick}
            className="btn btn-accent max-w-[320px] font-bold text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
