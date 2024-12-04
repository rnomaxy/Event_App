import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { Participant } from "@/components/Participant";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantsName, setParticipantsName] = useState('');

    const getCurrentDate = () => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        };

        return date.toLocaleDateString("pt-BR", options);
    };

    function handleParticipantAdd() {
        if (!participantsName.trim()) {
            return Alert.alert("Nome Inválido", "O nome do participante não pode ser vazio.");
        }

        if (participants.includes(participantsName)) {
            return Alert.alert("Participante Existe", "Já existe um participante com esse nome.");
        }

        setParticipants(prevState => [...prevState, participantsName.trim()]);
        setParticipantsName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Excluir", `Deseja excluir ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name));
                    Alert.alert("Deletado!");
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}> Nome do evento </Text>
            <Text style={styles.eventDate}> {getCurrentDate()}</Text>
        
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor='#6B6B6B'
                    onChangeText={setParticipantsName}
                    value={participantsName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.bottonText}>+</Text>
                </TouchableOpacity> 
            </View>   

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant 
                        name={item} 
                        onRemove={() => handleParticipantRemove(item)}  
                    />
                )}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença.
                    </Text>
                )}
            />
        </View>
    );
}