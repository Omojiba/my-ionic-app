import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function Children() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color={"primary"} />
          </IonButtons>
          <IonTitle style={{ textAlign: "center" }}>Children</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonSearchbar></IonSearchbar>
      </IonContent>
    </IonPage>
  );
}

export default Children;
