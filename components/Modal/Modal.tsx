import { Modal, StyleSheet } from "react-native";
import type { ReactNode } from "react";

type ModalType = {
	visible: boolean;
	children: ReactNode;
	onClose: () => void;
};

export default function ModalComponent({
	visible,
	children,
	onClose,
}: ModalType) {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
			style={styles.modalView}
		>
			{children}
		</Modal>
	);
}

const styles = StyleSheet.create({
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});
