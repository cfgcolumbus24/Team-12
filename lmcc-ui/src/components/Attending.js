export default function Attending({ attendeeCount, profileImg }) {
  const profileImages = [profileImg, profileImg, profileImg];

  return (
    <div className="flex gap-x-4 ml-10 items-center">
      <div className="flex w-1/3 relative ml-3">
        {profileImages.map((img, index) => (
          <ProfileCircle
            key={index}
            profileImg={img}
            zIndex={profileImages.length - index}
          />
        ))}
      </div>
      <p>and {attendeeCount - profileImages.length} more...</p>
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
