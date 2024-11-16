// components/UserCard.tsx

interface User {
    name: string;
    email: string;
    picture: string;
  }
  
  const UserCard = ({ user }: { user: User }) => {
    return (
      <div>
        <style jsx>{`
          .userCard {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: transform 0.3s ease;
          }
  
          .userCard:hover {
            transform: scale(1.05);
          }
  
          .userImage {
            border-radius: 50%;
            width: 120px;
            height: 120px;
            border: 4px solid #9c27b0; /* Purple border */
            margin-bottom: 1rem;
          }
  
          .userName {
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
          }
  
          .userEmail {
            color: #555;
          }
        `}</style>
  
        <div className="userCard">
          <img src={user.picture} alt={`${user.name}'s picture`} className="userImage" />
          <h2 className="userName">{user.name}</h2>
          <p className="userEmail">{user.email}</p>
        </div>
      </div>
    );
  };
  
  export default UserCard;
  