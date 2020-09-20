import React from "react"
import { graphql } from "gatsby"
import styles from "./candidates.module.scss"
import Layout from "../components/layout"
import SideNav from "../components/sideNav"
import CandidatesListItem from "../components/candidatesListItem"
import useWindowIsLarge from "../common/hooks/useWindowIsLarge"
import SectionHeader from "../components/sectionHeader"

export default function Candidates({ data }) {
  const election = data.allElection.edges[0].node
  let selectedElection = window.location.href.split("/")
  selectedElection = selectedElection[selectedElection.length - 1]
    .split("-")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className={styles.outerContainer}>
      <Layout windowIsLarge={useWindowIsLarge()}>
        <div className={styles.innerContainer}>
          <SideNav
            pageTitle="Candidates"
            pageSubtitle="City of San José Candidates"
          >
            <div className={styles.candidateList}>
              <SectionHeader title={selectedElection} />

              {election.OfficeElections.filter(
                election => election.Title === selectedElection
              ).map(({ Candidates }) =>
                Candidates.map(candidate => (
                  <CandidatesListItem
                    key={candidate.fields.slug}
                    {...candidate}
                  />
                ))
              )}
            </div>
          </SideNav>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allElection {
      edges {
        node {
          OfficeElections {
            Title
            TotalContributions
            Candidates {
              id
              Name
              fields {
                slug
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`
