import { BlurView } from "expo-blur";
import { usePathname, useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const isLoggedIn = true;

  console.log("pathname", pathname);
  console.log("insets", insets);

  const { width, height } = Dimensions.get("window");
  console.log(`화면 너비: ${width}, 화면 높이: ${height}`);
  console.log(
    `화면 너비: ${width * PixelRatio.get()}px, 화면 높이: ${height * PixelRatio.get()}px`,
  );

  return (
    <View
      style={[
        style.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <BlurView style={style.header} intensity={70}>
        <Image
          source={require("@/assets/images/threads.png")}
          style={style.headerLogo}
        />
        {!isLoggedIn && (
          <TouchableOpacity
            style={style.loginButton}
            onPress={() => router.navigate(`/login`)}
          >
            <Text style={style.loginButtonText}>로그인</Text>
          </TouchableOpacity>
        )}
      </BlurView>

      {isLoggedIn && (
        <View style={style.tabContainer}>
          <View style={style.tab}>
            <TouchableOpacity onPress={() => router.replace(`/`)}>
              <Text style={{ color: pathname === "/" ? "red" : "black" }}>
                For you
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.tab}>
            <TouchableOpacity onPress={() => router.replace(`/following`)}>
              <Text style={{ color: pathname === "/" ? "black" : "red" }}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View>
        <TouchableOpacity onPress={() => router.replace(`/@user/post/1`)}>
          <Text>게시글1</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.replace(`/@user/post/2`)}>
          <Text>게시글2</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => router.replace(`/@user/post/3`)}>
          <Text>게시글3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
  },
  headerLogo: {
    width: 42, // DP, DIP 단위
    height: 42,
    resizeMode: "contain",
  },
  loginButton: {
    position: "absolute",
    right: 20,
    top: 0,
    backgroundColor: "black",
    color: "white",
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  loginButtonText: {
    color: "white",
  },
});
