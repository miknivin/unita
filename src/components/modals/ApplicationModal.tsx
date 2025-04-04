import ApplicationForm from "../form/ApplicationForm";
import ContactForm from "../form/contact-form";

interface ApplicationFormProps {
  onClose: () => void;
  JobId: string;
}

export default function ApplicationModal({
  onClose,
  JobId,
}: ApplicationFormProps) {
  return (
    <div
      className="modal fade show d-block bg-black bg-opacity-75"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Apply for Job</h1>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <ApplicationForm onClose={onClose} jobId={JobId} />
          </div>
        </div>
      </div>
    </div>
  );
}
