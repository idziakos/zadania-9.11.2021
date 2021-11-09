"W JavaScript możemy też tworzyć metody statyczne, które są dostępne dla danej klasy."

"Metody takie nie są dostępne dla nowych instancji, a tylko dla samych klas"

class UserPersonalInfo{
    construtor(imie, nazwisko, wiek, wzrost){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.wzrost = wzrost;
    }

    static createTallRandomAgeUser(imie, nazwisko){
        return new UserPersonalInfo(imie, nazwisko, Math.round(Math.random()*60), 200);
    }
}