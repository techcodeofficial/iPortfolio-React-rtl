import profileImage from "../../assets/images/my-profile-img.jpg";
const ImageProfile = () => {
  return (
    <div className="profile-img">
      <img src={profileImage} alt="" className="img-fluid rounded-circle" />
    </div>
  );
};
export default ImageProfile;
