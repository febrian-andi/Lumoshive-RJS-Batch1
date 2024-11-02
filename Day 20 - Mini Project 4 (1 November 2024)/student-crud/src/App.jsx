import Navbar from "./components/Navbar";
import StudentMainContainer from "./containers/StudentMainContainer";

function App() {
  return (
    <>
      <Navbar />
      <StudentMainContainer />
      {/* <div className="modal fade" id="editStudentModal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">EDIT STUDENT</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">NAME</label>
                  <input
                    type="text"
                    className="form-control neo-shadow"
                    value="John Doe"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">class</label>
                  <input
                    type="text"
                    className="form-control neo-shadow"
                    value="XII IPA 1"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">EMAIL</label>
                  <input
                    type="email"
                    className="form-control neo-shadow"
                    value="john@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">PHONE</label>
                  <input
                    type="tel"
                    className="form-control neo-shadow"
                    value="+62123456789"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="neo-button cancel-btn"
                data-bs-dismiss="modal"
              >
                CANCEL
              </button>
              <button type="button" className="neo-button save-btn">
                UPDATE
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
