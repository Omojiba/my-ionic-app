import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

function Messages() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color={"primary"} />
          </IonButtons>
          <IonTitle style={{ textAlign: "center" }}>Messages</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
}

export default Messages;
