import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from
    'react-native';

const App = () => {
    const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
    const [modalVisiblePlatillos, setModalVisiblePlatillos] = useState(false);
    const [modalVisibleRutas, setModalVisibleRutas] = useState(false);
    return (
        <>
            <ScrollView >
                <Modal transparent={true} animationType='slide' visible={modalVisibleplaya} onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                    <View style={styles.vistaModal}>
                        <View style={styles.Modal}>
                            <Text style={styles.subtitulo}>Ir a la playa</Text>
                            <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
                            <Button title='Cerrar' onPress={() => { setModalVisibleplaya(!modalVisibleplaya) }}></Button>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} animationType='slide' visible={modalVisiblePlatillos} onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                    <View style={styles.vistaModal}>
                        <View style={styles.Modal}>
                            <Text style={styles.subtitulo}>Comer pupusas</Text>
                            <Text>Las Pupusas son un favorito de la cocina salvadoreña, unas tortillas gruesas de maíz hechas a mano, saladitas y rellenas de un extraordinario sabor; ya sean con frijoles, queso o carne de cerdo.</Text>
                            <Button title='Cerrar' onPress={() => { setModalVisiblePlatillos(!modalVisiblePlatillos) }}></Button>
                        </View>
                    </View>
                </Modal>

                <Modal transparent={true} animationType='slide' visible={modalVisibleRutas} onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                    <View style={styles.vistaModal}>
                        <View style={styles.Modal}>
                            <Text style={styles.subtitulo}>Concepción de Ataco</Text>
                            <Text>Concepción de Ataco, también conocido simplemente con el nombre de Ataco, es un municipio del departamento de Ahuachapán, que forma parte de la Ruta de Las Flores.</Text>
                            <Button title='Cerrar' onPress={() => { setModalVisibleRutas(!modalVisibleRutas) }}></Button>
                        </View>
                    </View>
                </Modal>

                <View style={{ flexDirection: 'row' }} >
                    <Image
                        style={styles.banner}
                        source={require('./src/img/bg.jpg')} />
                </View>

                <View style={styles.contenedor} >
                    <Text style={styles.titulo} >Que hacer en El Salvador</Text>
                    <ScrollView horizontal>
                        <View style={{ flexDirection: 'row' }} >
                            <TouchableHighlight onPress={() => { setModalVisibleplaya(!modalVisibleplaya) }}>
                                <Image
                                    style={styles.ciudad}
                                    source={require('./src/img/actividad1.jpg')} />
                            </TouchableHighlight>
                        </View >

                        <View style={{ flexDirection: 'row' }} >
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/actividad2.jpg')} />
                        </View >

                        <View style={{ flexDirection: 'row' }} >
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/actividad3.jpg')} />
                        </View >

                        <View style={{ flexDirection: 'row' }} >
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/actividad4.jpg')} />
                        </View >

                        <View style={{ flexDirection: 'row' }} >
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/actividad5.jpg')} />
                        </View >

                    </ScrollView>

                    <Text style={styles.titulo} >Platillos salvadoreños</Text>
                    <View>
                        <View>
                            <TouchableHighlight onPress={() => { setModalVisiblePlatillos(!modalVisiblePlatillos) }}>
                                <Image
                                    style={styles.mejores}
                                    source={require('./src/img/mejores1.jpg')}
                                ></Image>
                            </TouchableHighlight>
                        </View>

                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/mejores2.jpg')}
                            ></Image>
                        </View>

                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/mejores3.jpg')}
                            ></Image>
                        </View>
                    </View>

                    <Text style={styles.titulo} >Rutas turisticas</Text>
                    <View style={styles.listado}>
                        <View style={styles.listaItem}>
                            <TouchableHighlight onPress={() => { setModalVisibleRutas(!modalVisibleRutas) }}>
                                <Image
                                    style={styles.mejores}
                                    source={require('./src/img/ruta1.jpg')}
                                />
                            </TouchableHighlight>
                        </View>

                        <View style={styles.listaItem}>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/ruta2.jpg')}
                            />
                        </View>

                        <View style={styles.listaItem}>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/ruta3.jpg')}
                            />
                        </View>

                        <View style={styles.listaItem}>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/ruta4.jpg')}
                            />
                        </View>
                    </View>
                </View >
            </ScrollView >
        </>
    );
};
const styles = StyleSheet.create({
    banner: {
        height: 250,
        flex: 1
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10,
    },
    ciudad: {
        width: 250,
        height: 300,
        marginRight: 10,
    },
    mejores: {
        width: '100%',
        height: 200,
        marginVertical: 5,
    },
    listaItem: {
        flexBasis: '49%',
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    vistaModal: {
        backgroundColor: '#000000aa',
        flex: 1,
    },
    Modal: {
        backgroundColor: '#fff',
        margin: 50,
        padding: 40,
        borderRadius: 10,
        flex: 1,
    },
    subtitulo: {
        fontWeight: 'bold',
        fontSize: 14,
        justifyContent: 'center',
    },
});

export default App;