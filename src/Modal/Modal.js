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
				<p className="ModalText" onClick={this.handleOpenModal}>{this.props.label}</p>
				<ReactModal
					isOpen={this.state.showModal}
					appElement={document.getElementById('root') || undefined}
					onRequestClose={this.handleCloseModal}
					className={`Modal ${this.props.css}`} // TODO: Figure out how to use the styles property.
					overlayClassName="Overlay" >
						<button className={`ModalClose`} onClick={this.handleCloseModal}>&times;</button>
						{this.props.contents}
					</ReactModal>
			</div>
		)
	}
}

export default Modal;