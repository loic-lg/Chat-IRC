import axios from "axios";

// commande:  node test-unit\test-unit.js 

const BASE_URL = "http://localhost:5001/api"; 
const TEST_EMAIL = "test1@example.com"; // à modifier 
const TEST_PASSWORD = "123456"; 
const TEST_NAME = "Test1"; // à modifier
const TEST_UNIT_EMAIL = "legal.loic@gmail.com";  

const runTest = async () => {
  try {
    
    // Création du compte
    console.log("Création du compte...");
    const signupResponse = await axios.post(`${BASE_URL}/auth/signup`, {
      fullName: TEST_NAME,
      email: TEST_EMAIL,
      password: TEST_PASSWORD,
    });
    console.log("Utilisateur créé :", signupResponse.data);
    

    // Connexion
    console.log("Connexion...");
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: TEST_EMAIL,
      password: TEST_PASSWORD,
    });
    const token = loginResponse.headers["set-cookie"][0];
    console.log("Connexion réussie :", loginResponse.data);



    const api = axios.create({
      baseURL: BASE_URL,
      headers: { Cookie: token },
    });

    //Test envoi de message
    console.log("Recherche du compte 'test-unit'...");
    const usersResponse = await api.get(`/messages/users`);
    const testUnitUser = usersResponse.data.find(user => user.email === TEST_UNIT_EMAIL);
    if (!testUnitUser) throw new Error("Le compte 'test-unit' est introuvable.");
    console.log("Compte 'test-unit' trouvé :", testUnitUser);

    // Envoi du message
    console.log("Envoi du message à 'test-unit'...");
    const messageResponse = await api.post(`/messages/send/${testUnitUser._id}`, {
      text: `${TEST_NAME} : test-unit réussi.`,

    });
    console.log("Message envoyé :", messageResponse.data);

    // Déconnexion
    console.log("Déconnexion...");
    await api.post(`/auth/logout`);
    console.log("Déconnecté.");

    // résultat
    console.log("Test terminé !");
  } catch (error) {
    console.error("Erreur pendant le test :", error.response?.data || error.message);
  }
};

runTest();
