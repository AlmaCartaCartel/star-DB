export default class SwapiService {
  constructor() {
    this._api_base = "https://swapi.co/api";
    this._img_base = "https://starwars-visualguide.com/assets/img";
  }

  // Основная функция на основе которой осуществляется запрос к ДБ
  async getResourse(url) {
    const res = await fetch(this._api_base + url);

    if (!res.ok) {
      throw new Error(
        `Не удалось запросить данные по адресу ${this._api_base +
          url}, статус ${res.status}`
      );
    }

    return res.json();
  }
  // Получает сылку на базу с изображениями + раздел из параметров
  _getImg(data) {
    return `${this._img_base}${data}`;
  }
  // Получает список всех персонажей
  getAllPeople = async () => {
    const people = await this.getResourse("/people/");
    return people.results.map(this._transformPerson);
  };
  // Получение конкретного персонажа по id
  getPerson = async id => {
    const person = await this.getResourse(`/people/${id}`);
    return this._transformPerson(person);
  };
  // Получение всех кораблей
  getAllStarships = async () => {
    const starships = await this.getResourse("/starships/");
    return starships.results.map(this._transformStarship);
  };
  //Получени конкретного корабля по id
  getStarship = async id => {
    const starship = await this.getResourse(`/starships/${id}`);
    return this._transformStarship(starship);
  };
  // Получение всех планет 
  getAllPlanets = async () => {
    const planets = await this.getResourse("/planets/");
    return planets.results.map(this._transformPlanet);
  };
  // Получение конкретной планеты
  getPlanet = async id => {
    const planet = await this.getResourse(`/planets/${id}`);

    return this._transformPlanet(planet);
  };
  // Поскольку изначально в возвращаемых обьeктах с сервера нет id ,
  // то для получения выбираем его из ссылки 
  _getId(item) {
    return item.url.match(/\/([0-9]*)\/$/)[1];
  }
  // Выбирает только необходимые данные для работы приложения:
  _transformPlanet = planet => {
    return {
      id: this._getId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      img: this._getImg(`/planets/${this._getId(planet)}.jpg`)
    };
  };
  _transformPerson = person => {
    return {
      id: this._getId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      img: this._getImg(`/characters/${this._getId(person)}.jpg`)
    };
  };
  _transformStarship = starship => {
    return {
      id: this._getId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
      img: this._getImg(`/starships/${this._getId(starship)}.jpg`)
    };
  };
}
