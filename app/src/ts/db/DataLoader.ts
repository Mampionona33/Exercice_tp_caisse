class DataLoader {
  async loadData() {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Réponse non valide du serveur");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Erreur lors du chargement des données JSON : " + error.message);
    }
  }
}

export default new DataLoader();
