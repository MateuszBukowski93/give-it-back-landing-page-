import React from 'react';

export const PrivacyPolicyContent = () => (
  <>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Postanowienia ogólne</h3>
    <p>
      Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z aplikacji mobilnej "Give IT Back" (dalej: "Aplikacja").
    </p>
    <p>
      Administratorem danych osobowych zawartych w Aplikacji jest Twórca Aplikacji (dalej: "Administrator").
    </p>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">2. Zakres zbieranych danych</h3>
    <p>
      Aplikacja zbiera następujące dane osobowe i eksploatacyjne Użytkowników:
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Adres e-mail (niezbędny do rejestracji i logowania).</li>
      <li>Hasło (przechowywane w formie zaszyfrowanej).</li>
      <li>Dane o pożyczonych przedmiotach (nazwa, opis, zdjęcia, daty).</li>
      <li>Dane kontaktowe osób, którym pożyczasz lub od których pożyczasz przedmioty (imię, nazwisko, numer telefonu, adres e-mail) - pobierane z Twojej listy kontaktów za Twoją wyraźną zgodą.</li>
      <li><strong>Dane analityczne i behawioralne:</strong> Informacje o sposobie korzystania z Aplikacji, w tym: historia kliknięć, czas spędzony na poszczególnych ekranach, interakcje z elementami interfejsu, logi błędów oraz informacje o urządzeniu (model, system operacyjny, identyfikatory reklamowe).</li>
    </ul>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">3. Cel przetwarzania danych</h3>
    <p>
      Dane osobowe i analityczne Użytkowników przetwarzane są w celu:
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Świadczenia usług drogą elektroniczną w zakresie udostępniania treści gromadzonych w Aplikacji.</li>
      <li>Umożliwienia rejestracji i logowania do konta Użytkownika.</li>
      <li>Wysyłania powiadomień Push przypominających o terminach zwrotu przedmiotów.</li>
      <li>Wyświetlania reklam (w wersji darmowej Aplikacji) za pośrednictwem usługi Google AdMob.</li>
      <li>Obsługi płatności w przypadku wykupienia konta Premium.</li>
      <li><strong>Analizy i optymalizacji:</strong> Monitorowanie zachowań Użytkowników w celu wykrywania błędów, ulepszania funkcjonalności, dostosowywania interfejsu oraz personalizacji treści reklamowych (profilowanie).</li>
    </ul>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">4. Narzędzia analityczne</h3>
    <p>
      Aplikacja korzysta z zewnętrznych narzędzi analitycznych, takich jak Google Analytics for Firebase oraz Firebase Crashlytics. Narzędzia te zbierają anonimowe dane o użytkowaniu Aplikacji w celu tworzenia statystyk i raportów, które pomagają w jej rozwoju.
    </p>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">5. Uprawnienia Aplikacji</h3>
    <p>
      Aplikacja może prosić o dostęp do następujących uprawnień na urządzeniu mobilnym:
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li><strong>Kontakty:</strong> W celu ułatwienia tworzenia profili osób, którym pożyczasz przedmioty. Dane te są wykorzystywane wyłącznie wewnątrz Aplikacji.</li>
      <li><strong>Powiadomienia:</strong> W celu wysyłania przypomnień o terminach zwrotu.</li>
      <li><strong>Internet:</strong> W celu synchronizacji danych, wyświetlania reklam oraz przesyłania danych analitycznych.</li>
      <li><strong>Pamięć/Galeria:</strong> W celu dodawania zdjęć przedmiotów.</li>
    </ul>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">6. Udostępnianie danych</h3>
    <p>
      Dane osobowe Użytkowników nie są sprzedawane ani udostępniane osobom trzecim, z wyjątkiem sytuacji przewidzianych prawem lub niezbędnych do działania Aplikacji (np. dostawcy usług chmurowych, dostawcy usług reklamowych Google AdMob, dostawcy narzędzi analitycznych).
    </p>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">7. Prawa Użytkownika</h3>
    <p>
      Użytkownik ma prawo do wglądu w swoje dane, ich poprawiania, żądania ich usunięcia, ograniczenia przetwarzania oraz wniesienia sprzeciwu wobec przetwarzania danych w celach analitycznych. W celu realizacji tych praw należy skontaktować się z Administratorem.
    </p>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">8. Zmiany Polityki Prywatności</h3>
    <p>
      Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. O wszelkich zmianach Użytkownicy zostaną poinformowani poprzez aktualizację Aplikacji. Dalsze korzystanie z Aplikacji po wprowadzeniu zmian oznacza ich akceptację.
    </p>
  </>
);

export const TermsOfServiceContent = () => (
  <>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Postanowienia ogólne</h3>
    <p>
      Niniejszy Regulamin określa zasady korzystania z aplikacji mobilnej "Give IT Back" (dalej: "Aplikacja").
    </p>
    <p>
      Pobranie, zainstalowanie i korzystanie z Aplikacji oznacza pełną i bezwarunkową akceptację niniejszego Regulaminu.
    </p>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">2. Licencja i Prawa Autorskie</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Administrator udziela Użytkownikowi niewyłącznej, nieprzenoszalnej licencji na korzystanie z Aplikacji wyłącznie do celów osobistych, niekomercyjnych.</li>
      <li>Zabrania się kopiowania, modyfikowania, dekompilowania, inżynierii wstecznej oraz dystrybucji jakiejkolwiek części Aplikacji bez pisemnej zgody Administratora.</li>
      <li>Wszelkie prawa autorskie, znaki towarowe i inne prawa własności intelektualnej związane z Aplikacją należą do Administratora.</li>
    </ul>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">3. Konto Użytkownika</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Korzystanie z pełnej funkcjonalności Aplikacji wymaga założenia konta poprzez podanie adresu e-mail i hasła.</li>
      <li>Użytkownik zobowiązany jest do podania prawdziwych danych oraz ochrony swojego hasła przed dostępem osób niepowołanych.</li>
      <li>Administrator ma prawo do zawieszenia lub usunięcia konta Użytkownika w przypadku naruszenia postanowień Regulaminu, bez wcześniejszego powiadomienia.</li>
    </ul>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">4. Funkcjonalność i Monitorowanie</h3>
    <p>
      Aplikacja umożliwia:
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Tworzenie listy przedmiotów pożyczonych i wypożyczonych.</li>
      <li>Zapisywanie danych osób powiązanych z przedmiotami (integracja z kontaktami).</li>
      <li>Ustawianie przypomnień o terminach zwrotu (powiadomienia Push).</li>
    </ul>
    <p className="mt-2">
      Użytkownik wyraża zgodę na monitorowanie jego aktywności w Aplikacji (w tym kliknięć, nawigacji) w celach analitycznych i ulepszania jakości usług.
    </p>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">5. Wersja Premium i Reklamy</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>Wersja darmowa Aplikacji wyświetla reklamy dostarczane przez sieć Google AdMob.</li>
      <li>Użytkownik ma możliwość wykupienia konta Premium, które usuwa reklamy oraz znosi limit liczby dodawanych przedmiotów.</li>
      <li>Opłata za konto Premium jest bezzwrotna, chyba że obowiązujące przepisy prawa stanowią inaczej.</li>
    </ul>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">6. Wyłączenie Odpowiedzialności</h3>
    <p>
      Aplikacja jest dostarczana w stanie "takim, w jakim jest" ("as is"). Administrator nie udziela żadnych gwarancji, wyraźnych ani dorozumianych, dotyczących działania Aplikacji.
    </p>
    <p className="mt-2">
      W najszerszym zakresie dozwolonym przez prawo, Administrator nie ponosi odpowiedzialności za:
    </p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Utratę danych, zysków lub inne szkody pośrednie wynikające z korzystania lub niemożności korzystania z Aplikacji.</li>
      <li>Błędy w działaniu Aplikacji, przerwy w dostępie do usług lub awarie techniczne.</li>
      <li>Skutki udostępnienia hasła osobom trzecim przez Użytkownika.</li>
      <li>Treści reklam wyświetlanych w Aplikacji.</li>
    </ul>

    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">7. Postanowienia końcowe</h3>
    <p>
      W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego.
    </p>
    <p className="mt-2">
      Siedzibą Administratora jest Gdańsk. Wszelkie spory wynikające z korzystania z Aplikacji będą rozstrzygane przez sąd właściwy miejscowo dla siedziby Administratora (Gdańsk), z zastrzeżeniem wyjątków przewidzianych przez bezwzględnie obowiązujące przepisy prawa (w szczególności w relacjach z konsumentami).
    </p>
  </>
);
