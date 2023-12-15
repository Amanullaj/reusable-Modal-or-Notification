import React, { Component } from 'react';
import { Modal, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { images } from './Icons';
import { ColourCodes, fontFamilyBold } from './Constants';


class ReusableModal extends Component {
    render() {
        const { visible, closeModal, title, body, buttonText, image, color } = this.props;

        return (
            <Modal
                visible={visible}
                animationType="slide"
                transparent={true}
                onRequestClose={closeModal}
            >
                <View style={{
                    flex: 1, alignItems: 'center', justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.7)', padding: 20
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        alignItems: 'center', width: '100%', paddingTop: 40, borderRadius: 15, elevation: 5, padding: 20

                    }}>
                        <Image
                            source={image}
                            style={{
                                backgroundColor: color, height: 100, width: 100, borderRadius: 50, tintColor: 'white',

                                alignItems: 'center', justifyContent: 'center', position: 'absolute', top: -50
                            }}
                        />
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            //   color: ColourCodes.Blue,

                            //   fontFamily: fontFamilyBold,
                            marginTop: 20,
                            fontWeight: '700',
                        }}>{title}</Text>
                        <Text style={{
                            fontSize: 16,
                            textAlign: 'center',
                            color: '#000',
                            //   fontFamily: fontFamilyBold,
                            marginTop: 20, height: 60
                        }}>{body}</Text>

                        <TouchableOpacity
                            onPress={closeModal}
                        >
                            <View style={{
                                width: 200,
                                backgroundColor: color,
                                padding: 10,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'white',
                                }}>{buttonText}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default ReusableModal;