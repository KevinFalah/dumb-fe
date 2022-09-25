import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { styles } from './Styles';

const AddEpisode = () => {
	const [ rates, setRates ] = React.useState([
		{ titleEpisode: '', attachThumbnail: '', linkFilm: '' }
	]);

	const addRate = () => {
		setRates([ ...rates, { titleEpisode: '', attachThumbnail: '', linkFilm: '' } ]);
	};

	const handleChange = (event) => {
		const updateForm = [ ...rates ];
		updateForm[event.target.dataset.id][event.target.className] = event.target.value;
		setRates(updateForm);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={handleSubmit} onChange={handleChange}>
				{rates.map((row, index) => {
					const titleEpisodeId = `title-${index}`,
						attachThumbnailId = `attach-${index}`,
						linkFilmId = `link-${index}`;

						return (
							<div key={index} style={styles.container}>
								<h4>Add Episode</h4>
								<div className="form-group mb-2">
									<div
										style={{
											display: 'grid',
											gridTemplateColumns: 'repeat(2, 1fr)',
											gridGap: '1rem'
										}}
									>
									<input
										type="text"
										name={titleEpisodeId}
										data-id={index}
										id={titleEpisodeId}
										className="titleEpisode"
										placeholder="Title Episode"
										style={styles.customInputTitle}
									/>
									<input
										type="file"
										name={attachThumbnailId}
										data-id={index}
										id={attachThumbnailId}
										className="attachThumbnail"
										style={styles.customInputFile}
										/>
									<button
										className="btn-grey"
										onClick={() => {
											document
											.getElementsByName(attachThumbnailId)[0]
											.click();
										}}
										style={{
											width: '40%',
											height: '50px',
											fontSize: '18px',
											textAlign: 'left',
											float: 'right',
											justifySelf: 'right'
										}}
										>
										Attach Thumbnail{' '}
										<div
											style={{
											float: 'right',
											display: 'inline',
											fontSize: '20px'
											}}
										>
											<FontAwesomeIcon icon={faPaperclip} />
										</div>
									</button>
								</div>
							</div>
								<div className="form-group mb-2">
									<input
										type="text"
										name={linkFilmId}
										data-id={index}
										id={linkFilmId}
										className="linkFilm"
										placeholder="Link Film"
										style={styles.customInput}
									/>
								</div>
								<div className='d-flex flex-end' style={{marginLeft: "929px"}}>
									<Button className="btn bg-danger text-white border-0 px-4" as={Link} to='/video'>Add Episode</Button>
								</div>
							</div>
						);
				})}
			</form>
		</div>
	);
};

export default AddEpisode;
