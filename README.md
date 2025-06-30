# WorkLog Pro

## Frontend perusteet - Harjoitustyö

**Tekijä:**  
Tommi Hallila (AF1461)

**Kurssi:**  
HTKA0040-3004

**Opettaja:**  
Jarkko Immonen

**Palautuspäivä:**  
22.11.2024

---

## Sisällysluettelo

- [WorkLog Pro](#worklog-pro)
  - [Frontend perusteet - Harjoitustyö](#frontend-perusteet---harjoitustyö)
  - [Sisällysluettelo](#sisällysluettelo)
  - [1. Harjoitustyön ideointi](#1-harjoitustyön-ideointi)
  - [2. Työn vaiheet ja sovelluksen toiminta](#2-työn-vaiheet-ja-sovelluksen-toiminta)
    - [2.1 Projektin aloitus](#21-projektin-aloitus)
- [Työmaapäiväkirja – Projektiraportti](#työmaapäiväkirja--projektiraportti)
  - [2. Suunnittelu ja toteutus](#2-suunnittelu-ja-toteutus)
    - [2.2 Suunnittelu](#22-suunnittelu)
    - [2.3 Komponentit](#23-komponentit)
    - [2.4 Toiminnallisuudet](#24-toiminnallisuudet)
      - [Sovelluksen vaiheet:](#sovelluksen-vaiheet)
  - [3. Inspiraatio](#3-inspiraatio)
  - [4. Huomioitavaa](#4-huomioitavaa)
    - [Design vai toiminnallisuus?](#design-vai-toiminnallisuus)
    - [Perfektionismi](#perfektionismi)
    - [Jatkokehitysideoita](#jatkokehitysideoita)

---

## 1. Harjoitustyön ideointi

Harjoitustyötä ideoin aluksi keräämällä inspiraatiota ympäröivästä maailmasta ja kehittämällä ratkaisua, joka helpottaisi arkea. Kirjassa _Tee itsestäsi mestariajattelija_ (Lauri Järvilehto) esitetyt luovan prosessin vaiheet toimivat työn suunnittelun pohjana.

**Tausta:**  
Rakennusalalta vuokratyöntekijänä (Sairaala Nova -projekti, Lumon Oy:n tehtävät) saatu kokemus yhdistettiin modernin teknologian mahdollisuuksiin. Tavoitteena oli:

- Helpottaa työntekijöiden reflektointia.
- Tehdä töiden kirjaamisesta helppoa ja yksinkertaista.

**Tärkeät tavoitteet:**

- Käyttäjäystävällisyys kaikenikäisille.
- Reflektoinnin ja itsensä kehittämisen tukeminen.
- Työnjaon ja palauteprosessien parantaminen.

---

## 2. Työn vaiheet ja sovelluksen toiminta

### 2.1 Projektin aloitus

1. **Uusi Svelte-projekti:**  
   Projekti luotiin Svelte-frameworkilla hyödyntäen Viteä, joka tarjoaa nopean kehityspalvelimen ja tehokkaan rakennusprosessin.
2. **GitHub-repositoryn linkitys:**  
   Projektin hallinta tapahtuu versionhallinnan kautta.
   ```bash
   git init
   git branch -M main
   git add .
   git remote add origin https://github.com/thompson86/WorkLogPro.git
   git push -u origin main
   ```

# Työmaapäiväkirja – Projektiraportti

## 2. Suunnittelu ja toteutus

### 2.2 Suunnittelu

- **Figma-tiedosto**: Käytetty sovelluksen ulkoasun hahmotteluun.
- **Kirjautumisnäkymän taustakuva**: Tampereen työmaalta otettu valokuva, muokattu ja ehostettu Photoshopilla.
- **Logo**: Suunniteltu Adobe Illustratorilla.

### 2.3 Komponentit

Projektissa luotiin seuraavat Svelte-komponentit:

- `Information.svelte`
- `Diary.svelte`
- `Header.svelte`
- `Footer.svelte`
- `ProgressBar.svelte`: Lisätty toiminnallisuus etenemisen seuraamiseen sekä CSS-tyylit yhtenäisen ulkoasun varmistamiseksi.

### 2.4 Toiminnallisuudet

- **Käyttäjätiedot** tallennetaan writable store -ratkaisuun. Tiedot sisältävät:
  - Nimi
  - Työpaikka
  - Päivämäärä
  - Päiväkirjamerkinnät
- Lisätty **yksinkertainen validointi** tekstikentille.
- Käyttäjä voi **tarkastella yhteenvetoa** ennen tietojen lähettämistä.

#### Sovelluksen vaiheet:

1. Käyttäjä kirjautuu sisään.
2. Syöttää henkilötiedot ja valitsee päivämäärän.
3. Täyttää työpäivän tehtävät.
4. Tarkastaa yhteenvedon ja lähettää tiedot eteenpäin.

## 3. Inspiraatio

Sovellusidea ammentaa inspiraationsa seuraavista lähteistä:

- **Kirjat**:
  - _The Pragmatic Programmer_
  - _Tee itsestäsi mestariajattelija_
- **Internet-lähteet**:
  - [todomvc.com](https://todomvc.com)

## 4. Huomioitavaa

### Design vai toiminnallisuus?

Projekti eteni aluksi **design-edellä**, mikä hidasti kehitystä. Jatkossa priorisoin toiminnallisuutta, jotta sovelluksen käyttökokemus paranee.

### Perfektionismi

Perfektionismi aiheutti haasteita ja pysäytti työn etenemisen hetkellisesti. Tilanne ratkesi, kun pyysin rohkeasti apua opiskelukavereilta.

### Jatkokehitysideoita

- **Sää-API**: Näyttää reaaliaikaiset säätiedot valitulla paikkakunnalla.
- **Pudotuslista paikkakunnille**: Helpottaa käyttäjän valintaa.
- **Kalenterilaajennus**: Päivämäärän valinta visuaalisella työkalulla.
- **"Aloita alusta" -painike**: Palauttaa yhteenvetosivun tiedot alkuperäiseksi.
- **Henkilökunnan käyttöliittymä**: Lisäosio esimerkiksi johtoa varten.
