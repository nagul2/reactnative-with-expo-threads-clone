import { usePathname, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.replace(`/`)}>
        <Text style={{ color: pathname === "/" ? "red" : "black" }}>
          For you
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace(`/following`)}>
        <Text style={{ color: pathname === "/" ? "black" : "red" }}>
          Following
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace(`/@user/post/1`)}>
        <Text>게시글1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace(`/@user/post/2`)}>
        <Text>게시글2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace(`/@user/post/3`)}>
        <Text>게시글3</Text>
      </TouchableOpacity>
    </View>
  );
}
