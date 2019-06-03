import LocalizedStrings from 'react-native-localization';
export const HomeString = new LocalizedStrings({
    en:{
        titleHome: 'Home',
        labWelcome : 'Welcome To\n{0}\n{1}',
        labCheckOut : 'Check out Details'
    },
    it: {
        titleHome: 'Casa',
        labWelcome : 'Benvenuto Utente {0} {1}',
        labCheckOut : 'Scopri i dettagli'
    }
   });
export const DetailsString = new LocalizedStrings({
    en:{
        titleDetails: 'Details',
        labNextScreen : 'This is the next screen in the stack. Also added redux-saga sample.',
        btnLogout : 'Logout',
        btnIncrementAync : 'Increment after 1 second',
        btnIncrement : 'Increment',
        btnDecrement : 'Decrement',
        labClickCount: 'Clicked: {0} times'
    },
    it: {
        titleDetails: 'Dettagli',
        labNextScreen : 'Questa è la schermata successiva nello stack. Aggiunto anche l\'esempio di redux-saga.',
        btnLogout : 'Disconnettersi',
        btnIncrementAync : 'Incremento dopo 1 secondo',
        btnIncrement : 'Incremento',
        btnDecrement : 'diminuzione',
        labClickCount: 'Clic: {0} volte'
    }
   });