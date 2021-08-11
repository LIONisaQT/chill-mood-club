import { Component } from "react";
import ReactModal from "react-modal";

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		this.setState({showModal: true});
	}

	handleCloseModal() {
		this.setState({showModal: false});
	}

	render() {
		return (
			<div className="ModalButton">
				<p onClick={this.handleOpenModal}>{this.props.label}</p>
				<ReactModal
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
					className={`Modal ${this.props.css}`} // TODO: Figure out how to use the styles property.
					overlayClassName="Overlay"
					>
						<p class="ModalText">{this.props.contents}</p>
						{/* <button onClick={this.handleCloseModal}>Close Modal</button> */}
					</ReactModal>
			</div>
		)
	}
}

export default Modal;