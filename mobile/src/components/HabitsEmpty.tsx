import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitsEmpty() {
    const { navigate } = useNavigation();

    return (
        <Text className="text-zinc-400 text-base">
            Poxa, parece que ainda não tem nenhum hábito por aqui... {' '}
            <Text
                className="text-violet-400 text-base underline active:text-violet-500"
                onPress={() => navigate('new')}
            >
                Tente cadastrar um. 🫡
            </Text>
        </Text>
    );
}