import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function Dashboard() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color={"primary"} />
          </IonButtons>
          <IonTitle style={{ textAlign: "center" }}>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
}

export default Dashboard;
