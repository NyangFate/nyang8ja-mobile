import { usePushNotifications } from "@/hooks/usePushNotifications";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

export default function HomeScreen() {
  usePushNotifications();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: "https://tarotmeow.vercel.app/" }} style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
