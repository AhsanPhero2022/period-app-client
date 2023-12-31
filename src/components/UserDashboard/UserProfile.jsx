import React from "react";
import {
  // ... other imports

  // Import Tailwind CSS classes for styling
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

export default function UserProfile() {
  return (
    <section className="bg-gray-200">
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-white rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href="#" className="text-blue-500">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#" className="text-blue-500">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle w-40"
                />
                <p className="text-gray-500 mb-1">Full Stack Developer</p>
                <p className="text-gray-500 mb-4">Bay Area, San Francisco, CA</p>
                <div className="flex justify-center mb-2">
                  <MDBBtn className="bg-blue-500 text-white">Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            {/* ... other cards */}
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                {/* ... other card content */}

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-gray-500">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                {/* ... other rows with similar structure */}
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    {/* ... other card content */}

                    <MDBCardText className="mb-4">
                      <span className="text-blue-500 italic me-1">assignment</span>
                      Project Status
                    </MDBCardText>
                    <MDBCardText className="mb-1 text-sm">Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar className="bg-blue-500" width={80} />
                    </MDBProgress>
                    <MDBProgress className="rounded">
                      <MDBProgressBar className="bg-blue-500" width={80} />
                    </MDBProgress>
                    <MDBProgress className="rounded">
                      <MDBProgressBar className="bg-blue-500" width={80} />
                    </MDBProgress>

                    {/* ... other progress bars */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    {/* ... other card content */}

                    <MDBCardText className="mb-4">
                      <span className="text-blue-500 italic me-1">assignment</span>
                      Project Status
                    </MDBCardText>
                    {/* ... other card content */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
