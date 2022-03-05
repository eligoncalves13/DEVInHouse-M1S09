const UserData = ({name, city, age, favoriteMovie, ...otherProps}) => {
  return (
    <>
      <div className="text-container">
        <p>Meu nome é {name}, tenho {age} e moro atualmente na cidade de {city}. Meu filme preferido é {favoriteMovie}.</p>
      </div>
      <div>
        <button className="btn-change-movie" {...otherProps}>Mudar Filme</button>
      </div>
    </>
  );
}

export default UserData;