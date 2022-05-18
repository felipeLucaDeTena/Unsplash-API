import toast from "react-hot-toast";

function sortPhotos(data, setData, sortType) {
  const newData = [...data];
  const types = {
    likes: "likes",
    size: "height",
    date: "created_at",
  };
  const sortProperty = types[sortType];
  sortProperty === "created_at"
    ? newData.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      )
    : newData.sort((a, b) => b[sortProperty] - a[sortProperty]);
  setData(newData);
}

export default sortPhotos;

export const notifyDelete = () => toast("Photo was Deleted.");

export const notifyUpdate = () => toast("Comment was updated");

export const notifyAdd = () => toast("Photo was Added");
