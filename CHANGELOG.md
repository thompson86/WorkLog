# Changelog

Kaikki merkittävät muutokset tähän projektiin dokumentoidaan tässä tiedostossa.

Projekti: **WorkLogPro**

## [1.0.2] – 2025-06-30

### Muutokset

- Lisätty kalenterikuvake päivämääräkenttään.
- Parannettu listan animaatiota tehtäväkirjauksissa.
- Korjattu virhe, jossa kaksi samanlaista merkintää aiheutti ongelman.
- Tooltip-tyyli muutettu ammattimaisemmaksi ja visuaalisesti selkeämmäksi.

## [1.0.1] – 2025-06-30

### Uutta

- Lisätty animaatio virhemodaalille (fade transition).
- Navigointipalkin vasemmassa yläkulmassa oleva **WorkLogPro**-teksti toimii "aloita alusta" -painikkeena.
- Päivämääräkenttä päivitetty tukemaan paremmin syöttöä ja validointia.

## [1.0.0] – 2024-11-10

### Ensimmäinen julkaisu

- Perustoiminnot työntekijän työpäivän kirjaamiseen:
  - Tietojen syöttö: nimi, paikkakunta, työmaa, päivämäärä.
  - Tehtävien lisäys ja listaus.
  - Yhteenvetosivu.
- Käyttöliittymä toteutettu modernilla Svelte-arkkitehtuurilla.
- Tyylikäs visuaalinen teema (dark mode + lasimainen tausta).
- Perusanimaatiot käyttöliittymäelementeille.
- Supabase-integraation valmistelu.

---

## Integraatiot

- ✅ Supabase:
  - `INSERT`-toiminnallisuus työpäivän tallentamiseen `worklogs`-tauluun.
  - `store.js` yhdistää lomakearvot yksinkertaisesti.

---

## Suunnitteilla

- 🔒 Autentikointi (kirjautuminen Supabasen kautta).
- 📈 Työn tilastojen automaattinen visualisointi.
- 🗃️ Kirjattujen päivien historia & muokkaus.

---

> Päivittänyt: **Tommi Hallila**  
> Viimeisin päivitys: 2025-06-30
