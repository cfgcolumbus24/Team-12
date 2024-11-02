export default function Attending({ profileImg }) {
  const profileImages = [profileImg, profileImg, profileImg];

  return (
    <div className="flex gap-x-4 ml-10 items-center">
      <div className="flex w-1/6 relative ml-3">
        {profileImages.map((img, index) => (
          <ProfileCircle
            key={index}
            profileImg={img}
            zIndex={profileImages.length - index}
          />
        ))}
      </div>
      <p>and {28 - profileImages.length} more...</p>
    </div>
  );
}

function ProfileCircle({ profileImg, zIndex }) {
  return (
    <div
      className={`rounded-full border border-black border-double p-1`}
      style={{
        zIndex: zIndex,
      }}
    >
      <img src={profileImg} alt="profile" className="rounded-full" />
    </div>
  );
}
